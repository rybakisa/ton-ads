from rest_framework import viewsets
from rest_framework_extensions.mixins import NestedViewSetMixin
from .models import Contract
from .serializers import ContractSerializer


class ContractViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    """
    A viewset for viewing and editing Campaign instances.
    """
    serializer_class = ContractSerializer
    queryset = Contract.objects.all()
