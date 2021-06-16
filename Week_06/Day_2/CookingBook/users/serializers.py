# from django.contrib.auth.models import User
from django.contrib.auth import get_user_model
from rest_framework import serializers

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'password', 'last_login', 'is_superuser', 'username', 'first_name', 'last_name', 'is_staff', 'is_active', 'date_joined', 'email']
        read_only_fields = ['id', 'date_joined', 'is_superuser']


class SaveUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'is_active', 'date_joined']
        read_only_fields = fields

