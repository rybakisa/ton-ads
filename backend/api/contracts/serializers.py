from rest_framework.serializers import ModelSerializer

from channels.serializers import ChannelSerializer
from .models import Contract


class ContractSerializer(ModelSerializer):
    channel = ChannelSerializer()

    class Meta:
        model = Contract
        fields = '__all__'

    def update(self, instance, validated_data):
        channel_data = validated_data.pop('channel')
        instance.channel.address = channel_data['address']
        return instance
