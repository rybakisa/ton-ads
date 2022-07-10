from django.contrib import admin
from .models import Channel, ChannelState


class ChannelStateInline(admin.StackedInline):
    model = ChannelState
    extra = 1


@admin.register(Channel)
class PlatformAdmin(admin.ModelAdmin):
    inlines = [
        ChannelStateInline,
    ]
