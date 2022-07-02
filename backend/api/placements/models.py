from django.db import models

from platforms.models import Platform


class Placement(models.Model):
    platform = models.ForeignKey(
        Platform,
        blank=False,
        on_delete=models.CASCADE,
    )
    name = models.CharField(
        max_length=255,
        blank=False,
    )

    def __str__(self):
        return f'{self.name}'
