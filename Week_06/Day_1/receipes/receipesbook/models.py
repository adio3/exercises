from django.db import models


class ReceipeModel(models.Model):
    title = models.CharField(
        verbose_name='title',
        max_length=100,
    )
    description = models.TextField(
        verbose_name="description",
        max_length=400,
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

    favourite = models.BooleanField(
        verbose_name='favourite',
        default=False,
    )
    created = models.DateTimeField(
        verbose_name='created',
        auto_now_add=True,
    )
    updated = models.DateTimeField(
        verbose_name='updated',
        auto_now=True,
    )
# first = ReceipeModel(title='first', description='my first receipe', ingredients='something', difficulty='badass')