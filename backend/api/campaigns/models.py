from django.db import models

from advertisers.models import Advertiser


class Campaign(models.Model):
    advertiser = models.ForeignKey(
        Advertiser,
        blank=False,
        on_delete=models.CASCADE,
    )
    name = models.CharField(
        max_length=255,
        blank=False,
    )

    def __str__(self):
        return f'{self.name}'
