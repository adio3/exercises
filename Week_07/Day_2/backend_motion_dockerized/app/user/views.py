from django.shortcuts import render
from rest_framework.generics import GenericAPIView, ListCreateAPIView, ListAPIView
from rest_framework.response import Response

from .serializers import UserSerializerToggleFollow,UserSerializerFolloweesFollowers
from .models import User


class ListAllFollowees(ListAPIView):
    serializer_class = UserSerializerFolloweesFollowers
    def get_queryset(self):
        return self.request.user.followees

class ListAllFollowers(ListAPIView):
    serializer_class = UserSerializerFolloweesFollowers
    def get_queryset(self):
        return self.request.user.followers

class ToggleFollowUserView(GenericAPIView):
    serializer_class = UserSerializerToggleFollow
    queryset = User.objects.all()
    lookup_field = "id"

    def post(self,request,*args,**kwargs):
        current_user = request.user
        user_to_be_followed = self.get_object()
        if user_to_be_followed in current_user.followees.all():
            current_user.followees.remove(user_to_be_followed)

        else:
            current_user.followees.add(user_to_be_followed)

        return Response(self.get_serializer(current_user).data)
