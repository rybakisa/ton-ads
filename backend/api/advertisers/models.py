from django.db import models

from profiles.models import Profile


class Advertiser(models.Model):
    profile = models.OneToOneField(
        Profile,
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return f'{self.profile}'
