from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListAPIView, CreateAPIView

from rest_framework.permissions import IsAdminUser, AllowAny
from CookingBook.permissions import IsUserOrSuperuserOrDenied

from .models import User
from .serializers import UserSerializer


class SingleUserView(RetrieveUpdateDestroyAPIView):
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
    Only user / superuser. If not access denied

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
    permission_classes = [IsUserOrSuperuserOrDenied]
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'pk'


class CreateUserView(CreateAPIView):
    """
    post:
    **Description**
    Add a new user
    **Permission:**
    Any allowed
    """
    permission_classes = [AllowAny]
    queryset = User.objects.all()
    serializer_class = UserSerializer

class AllUserView(ListAPIView):
    """
    get:
    **Description**
    Returns all cookbooks
    **Permission:**
    Only adminuser / superuser
    """
    permission_classes = [IsAdminUser]
    queryset = User.objects.all()
    serializer_class = UserSerializer
