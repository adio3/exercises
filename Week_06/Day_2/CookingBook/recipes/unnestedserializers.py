from rest_framework import serializers
from .models import Recipe


class RecipeCookingBookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = ['id', 'title', 'description', 'ingredients', 'difficulty', 'favourite', 'author', 'created',
                  'updated']
        read_only_fields = fields

