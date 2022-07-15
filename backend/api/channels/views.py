from rest_framework import viewsets
from rest_framework_extensions.mixins import NestedViewSetMixin

from .models import Channel
from .serializers import ChannelSerializer


class ChannelViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    """
    A viewset for viewing and editing Channel instances.
    """
    serializer_class = ChannelSerializer
    queryset = Channel.objects.all()
