# Generated by Django 4.0.5 on 2022-07-03 15:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='profile',
            old_name='ton_account_seed',
            new_name='ton_account_mnemonic',
        ),
    ]
