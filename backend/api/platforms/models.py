from django.db import models

from profiles.models import Profile


class Platform(models.Model):
    profile = models.OneToOneField(
        Profile,
        blank=False,
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return f'{self.profile}'
