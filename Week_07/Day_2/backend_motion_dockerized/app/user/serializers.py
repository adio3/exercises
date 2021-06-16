from rest_framework import serializers

from .models import User

class UserSerializerToggleFollow(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = '__all__'

class UserSerializerFolloweesFollowers(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id','username']