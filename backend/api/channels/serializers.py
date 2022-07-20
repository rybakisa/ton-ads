from rest_framework.fields import IntegerField
from rest_framework.serializers import ModelSerializer

from .models import Channel, ChannelState


class ChannelStateSerializer(ModelSerializer):
    balanceA = IntegerField(source='balance_advertiser')
    balanceB = IntegerField(source='balance_platform')
    seqnoA = IntegerField(source='seqno_advertiser')
    seqnoB = IntegerField(source='seqno_platform')

    class Meta:
        model = ChannelState
        fields = [
            'balanceA',
            'balanceB',
            'seqnoA',
            'seqnoB',
            'signature',
            'channel',
        ]


class ChannelSerializer(ModelSerializer):
    class Meta:
        model = Channel
        fields = '__all__'
