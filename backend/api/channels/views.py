from rest_framework import viewsets
from rest_framework_extensions.mixins import NestedViewSetMixin

from .models import Channel, ChannelState
from .serializers import ChannelSerializer, ChannelStateSerializer


class ChannelViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    """
    A viewset for viewing and editing Channel instances.
    """
    serializer_class = ChannelSerializer
    queryset = Channel.objects.all()


class ChannelStateViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    """
    A viewset for viewing and editing ChannelState instances.
    """
    serializer_class = ChannelStateSerializer
    queryset = ChannelState.objects.all()