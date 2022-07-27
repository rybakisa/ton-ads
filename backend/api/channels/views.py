from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework_extensions.mixins import NestedViewSetMixin

from .models import Channel, ChannelState
from .serializers import ChannelSerializer, ChannelStateSerializer, ChannelConfigSerializer


class ChannelViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    """
    A viewset for viewing and editing Channel instances.
    """
    serializer_class = ChannelSerializer
    queryset = Channel.objects.all()

    @action(detail=True, url_path='config')
    def config(self, request, *args, **kwargs):
        serializer = ChannelConfigSerializer(
            self.get_object()
        )
        return Response(serializer.data)


class ChannelStateViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    """
    A viewset for viewing and editing ChannelState instances.
    """
    serializer_class = ChannelStateSerializer
    queryset = ChannelState.objects.all()

    @action(detail=False, url_path='latest')
    def latest_state(self, request, *args, **kwargs):
        serializer = self.get_serializer(
            Channel.objects.get(
                id=int(kwargs['parent_lookup_channel'])
            ).latest_state
        )
        return Response(serializer.data)

    @action(detail=False, url_path='initial')
    def initial_state(self, request, *args, **kwargs):
        serializer = self.get_serializer(
            Channel.objects.get(
                id=int(kwargs['parent_lookup_channel'])
            ).initial_state
        )
        return Response(serializer.data)
