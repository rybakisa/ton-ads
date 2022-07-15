from rest_framework.serializers import ModelSerializer

from .models import Channel, ChannelState


class ChannelStateSerializer(ModelSerializer):
    class Meta:
        model = ChannelState
        fields = '__all__'


class ChannelSerializer(ModelSerializer):
    class Meta:
        model = Channel
        fields = '__all__'
