from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListAPIView, CreateAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from CookingBook.permissions import IsUserOrSuperuserOrReadOnly

from .models import CookingBook
from .serializers import CookingBookSerializer


class AllCookingBookView(ListAPIView):
    """
    get:
    **Description**
    Returns all cookbooks
    **Permission:**
    All authenticated users
    """
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = CookingBook.objects.all()
    serializer_class = CookingBookSerializer


class SingleCookingBookView(RetrieveUpdateDestroyAPIView):
    """
    get:
    **Description**
    Returns a cookbook based on the given id
    **Permission:**
    Only user / superuser

    put:
    **Description**
    Updates and returns a cookbook based on the given id
    **Permission:**
    Only user / superuser

    patch:
    **Description**
    Partially updates and returns a cookbook based on the given id
    **Permission:**
    Only user / superuser

    delete:
    **Description**
    Deletes a cookbook based on the given id and return no content status 204
    **Permission:**
    Only user / superuser
    """
    permission_classes = [IsUserOrSuperuserOrReadOnly]
    queryset = CookingBook.objects.all()
    serializer_class = CookingBookSerializer
    lookup_field = 'pk'

    def perform_update(self, serializer):
        try:
            if self.request.data["recipes"] and self.request.data["author"]:
                serializer.save(recipes=self.request.data["recipes"], author=self.request.data["author"]) # last change: cookbooks=self.request.data["recipes"] + author added
        except:
            serializer.save()


class CreateCookingBookView(CreateAPIView):
    """
    post:
    **Description**
    Add a new cookbook
    **Permission:**
    All authenticated users
    """
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = CookingBook.objects.all()
    serializer_class = CookingBookSerializer

    def perform_create(self, serializer):
        try:
            if self.request.data["recipes"]:
                serializer.save(cookbooks=self.request.data["recipes"])
        except:
            serializer.save()


class ToggleFavouriteCookBookView(CreateAPIView):
    """
    patch:
    **Description**
    Toggle favourite current user
    **Permission:**
    Only user / superuser
    """
    permission_classes = [IsUserOrSuperuserOrReadOnly]
    queryset = CookingBook.objects.all()
    serializer_class = CookingBookSerializer
    lookup_url_kwarg = 'id'

    def patch(self, request, *args, **kwargs):
        cookbook = self.get_object()
        user = self.request.user
        isFavourite = user in cookbook.favourite.all()
        if isFavourite:
            cookbook.favourite.remove(user)
        else:
            cookbook.favourite.add(user)
        return Response(self.get_serializer(cookbook).data)
