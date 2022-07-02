from django.contrib import admin
from placements.models import Placement
from .models import Platform


class PlacementInline(admin.StackedInline):
    model = Placement
    extra = 1


@admin.register(Platform)
class PlatformAdmin(admin.ModelAdmin):
    inlines = [
        PlacementInline,
    ]
