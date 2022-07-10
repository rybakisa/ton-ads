from django.db import models


class Channel(models.Model):
    address = models.CharField(
        max_length=255,
        blank=True,
    )

    def get_initial_state(self):
        return self.states.earliest()

    def get_latest_state(self):
        return self.states.latest()

    def __str__(self):
        return f'{self.address}'


class ChannelState(models.Model):
    channel = models.ForeignKey(
        Channel,
        blank=False,
        null=False,
        on_delete=models.CASCADE,
        related_name='states',
    )
    created = models.DateTimeField(
        blank=False,
        null=False,
        auto_now_add=True,
    )
    balance_advertiser = models.IntegerField(
        null=False,
    )
    balance_platform = models.IntegerField(
        null=False,
    )
    seqno_advertiser = models.IntegerField(
        null=False,
    )
    seqno_platform = models.IntegerField(
        null=False,
    )

    def __str__(self):
        return f'{self.channel}: {self.seqno_advertiser}-{self.seqno_platform}'
