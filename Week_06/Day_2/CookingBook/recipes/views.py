# from django.views.decorators.csrf import csrf_exempt
# from rest_framework.parsers import JSONParser
from django.contrib.auth import get_user_model
from django.db.models import Q
from django.http import HttpResponse, JsonResponse
from rest_framework.response import Response
from rest_framework.generics import GenericAPIView, RetrieveUpdateDestroyAPIView, CreateAPIView, ListAPIView

from rest_framework.permissions import IsAuthenticatedOrReadOnly
from CookingBook.permissions import IsUserOrSuperuserOrReadOnly

from .models import Recipe
from .serializers import RecipeSerializer

User = get_user_model()


class AllRecipeView(ListAPIView):
    """
    get:
    **Description**
    Returns all recipes
    **Permission:**
    All authenticated users
    """
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer


class SingleRecipeView(RetrieveUpdateDestroyAPIView):
    """
    get:
    **Description**
    Returns a recipe based on the given id
    **Permission:**
    Only user / superuser

    put:
    **Description**
    Updates and returns a recipe based on the given id
    **Permission:**
    Only user / superuser

    patch:
    **Description**
    Partially updates and returns a recipe based on the given id
    **Permission:**
    Only user / superuser

    delete:
    **Description**
    Deletes a recipe based on the given id and return no content status 204
    **Permission:**
    Only user / superuser
    """
    permission_classes = [IsUserOrSuperuserOrReadOnly]
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    lookup_field = 'pk'

    def perform_update(self, serializer):
        try:
            if self.request.data["cookbooks"]:
                serializer.save(cookbooks=self.request.data["cookbooks"])
        except:
            serializer.save()


class CreateRecipeView(CreateAPIView):
    """
    post:
    **Description**
    Add a new recipe
    **Permission:**
    All authenticated users
    """
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

    def perform_create(self, serializer):
        try:
            if self.request.data["cookbooks"] and self.request.data["author"]:
                serializer.save(cookbooks=self.request.data["cookbooks"], author=self.request.data["author"])
        except:
            serializer.save()


class ToggleFavouriteRecipeView(CreateAPIView):
    """
    patch:
    **Description**
    Toggle favourite current user
    **Permission:**
    Only user / superuser
    """
    permission_classes = [IsUserOrSuperuserOrReadOnly]
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    lookup_url_kwarg = 'id'

    def patch(self, request, *args, **kwargs):
        recipe = self.get_object()
        user = self.request.user
        isFavourite = user in recipe.favourite.all()
        if isFavourite:
            recipe.favourite.remove(user)
        else:
            recipe.favourite.add(user)
        return Response(self.get_serializer(recipe).data)

# class AllRecipeView(GenericAPIView):
#     permission_classes = [IsAuthenticatedOrReadOnly]
#     queryset = Recipe.objects.all()
#
#     def get(self, request):
#         queryset = self.get_queryset()
#         serializer = RecipeSerializer(queryset, many=True)
#         return JsonResponse(serializer.data, safe=False)
#
# class SingleRecipeView(GenericAPIView):
#
#
#     def get(self, request, *args, **kwargs):
#         queryset = Recipe.objects.filter(pk=self.kwargs['pk'])
#         serializer = RecipeSerializer(queryset, many=True)
#         return Response(serializer.data)
#
#     def post(self, request, *args, **kwargs):
#         serializer = RecipeSerializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         serializer.save()
#         return Response(serializer.data)
#
#     # put don't work
#
#     def put(self, request, *args, **kwargs):
#         data = JSONParser().parse(request)
#         queryset = Recipe.objects.filter(pk=self.kwargs['pk'])
#         serializer = RecipeSerializer(queryset, data=data, many=True)
#         serializer.is_valid(raise_exception=True)
#         serializer.save()
#         return JsonResponse(serializer.data)
