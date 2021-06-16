from rest_framework import serializers
from cookbooks.unnestedserializers import CookingBookRecipesSerializer
from users.serializers import SaveUserSerializer
from .models import Recipe


class RecipeSerializer(serializers.ModelSerializer):
    # nested serializers to get data of author, favourite...
    cookbooks = CookingBookRecipesSerializer(many=True, read_only=True)
    author = SaveUserSerializer(required=False, read_only=True)
    favourite = SaveUserSerializer(required=False, read_only=True)
    class Meta:
        model = Recipe
        fields = ['id', 'title', 'description', 'ingredients', 'difficulty', 'favourite', 'cookbooks', 'author',
                  'created', 'updated']
        read_only_fields = ['id', 'created', 'updated']
