from django.contrib.auth import get_user_model
from django.db import models

# Import User from custom user
User = get_user_model()


class CookingBook(models.Model):
    title = models.CharField(
        verbose_name='title',
        max_length=100,
    )
    description = models.TextField(
        verbose_name="description",
        max_length=1500,
    )

    author = models.ForeignKey(to=User, related_name='cookbooks', on_delete=models.CASCADE)

    favourite = models.ManyToManyField(to=User, blank=True, related_name='cookbooks_favourite')

    created = models.DateTimeField(
        verbose_name='created',
        auto_now_add=True,
    )
    updated = models.DateTimeField(
        verbose_name='updated',
        auto_now=True,
    )