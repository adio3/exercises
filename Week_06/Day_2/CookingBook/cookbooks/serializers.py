from rest_framework import serializers
from recipes.unnestedserializers import RecipeCookingBookSerializer
from users.serializers import SaveUserSerializer
from .models import CookingBook


class CookingBookSerializer(serializers.ModelSerializer):
    # nested serializers to get data of author, favourite...
    recipes = RecipeCookingBookSerializer(many=True, read_only=True)
    author = SaveUserSerializer(required=False, read_only=True)
    favourite = SaveUserSerializer(required=False, read_only=True)
    class Meta:
        model = CookingBook
        fields = ['id', 'title', 'description', 'author', 'recipes', 'favourite', 'created', 'updated']
        read_only_fields = ['id', 'created', 'updated']

