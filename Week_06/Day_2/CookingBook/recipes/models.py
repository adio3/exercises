from django.contrib.auth import get_user_model
from django.db import models
from cookbooks.models import CookingBook

# Import User from custom user
User = get_user_model()


class Recipe(models.Model):

    title = models.CharField(
        verbose_name='title',
        max_length=100,
    )
    description = models.TextField(
        verbose_name="description",
        max_length=1500,
    )
    ingredients = models.TextField(
        verbose_name='ingredients',
        blank=True,
        max_length=100,
    )
    DIFFICULTY_CHOICES = [
        (1, 'Easy'),
        (2, 'Intermediate'),
        (3, 'Hard')
    ]

    difficulty = models.IntegerField(choices=DIFFICULTY_CHOICES)

    favourite = models.ManyToManyField(to=User, blank=True, related_name='recipes_favourite')
    author = models.ForeignKey(to=User, related_name='recipes', on_delete=models.CASCADE, default=3)
    cookbooks = models.ManyToManyField(to=CookingBook, blank=True, related_name='recipes')

    created = models.DateTimeField(
        verbose_name='created',
        auto_now_add=True,
    )
    updated = models.DateTimeField(
        verbose_name='updated',
        auto_now=True,
    )
