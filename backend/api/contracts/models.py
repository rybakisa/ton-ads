from django.db import models

from placements.models import Placement
from campaigns.models import Campaign


class ContractStates(models.TextChoices):
    CREATED = 'CREATED'
    ACTIVE = 'ACTIVE'
    CLOSED = 'CLOSED'


class Contract(models.Model):
    placement = models.ForeignKey(
        Placement,
        blank=False,
        on_delete=models.CASCADE,
    )
    campaign = models.ForeignKey(
        Campaign,
        blank=True,
        on_delete=models.CASCADE,
    )
    state = models.CharField(
        max_length=255,
        choices=ContractStates.choices,
    )
    payment_channel_address = models.CharField(
        max_length=255,
        blank=True,
    )

    def __str__(self):
        return f'{self.placement} {self.state}'
