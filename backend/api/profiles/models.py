from django.db import models
from django.contrib.auth.models import User


class Profile(models.Model):
    user = models.ForeignKey(
        User,
        blank=False,
        on_delete=models.CASCADE,
    )
    ton_account_mnemonic = models.CharField(
        max_length=255,
        blank=True,
    )
    ton_account_address = models.CharField(
        max_length=255,
        blank=True,
    )

    def __str__(self):
        return f'{self.user}'
