from rest_framework.fields import IntegerField, CharField, ReadOnlyField
from rest_framework.serializers import ModelSerializer

from .models import Channel, ChannelState


class ChannelSerializer(ModelSerializer):
    class Meta:
        model = Channel
        fields = '__all__'


class ChannelConfigSerializer(ModelSerializer):
    channelId = IntegerField(source='id')
    addressA = CharField(source='contract.campaign.advertiser.profile.ton_account_address')
    addressB = CharField(source='contract.placement.platform.profile.ton_account_address')
    initBalanceA = IntegerField(source='contract.initial_balance')
    initBalanceB = ReadOnlyField(default=0)

    class Meta:
        model = Channel
        fields = [
            'channelId',
            'addressA',
            'addressB',
            'initBalanceA',
            'initBalanceB',
        ]


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
