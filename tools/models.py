from django.db import models


# Create your models here.

class store(models.Model):
    name = models.CharField(db_index=True, max_length=100, blank=True, default='')
    category = models.CharField(max_length=100, blank=True, default='')
    emoji = models.CharField(max_length=100, blank=True, default='')
    html = models.CharField(max_length=100, blank=True, default='')
    shortname = models.CharField(db_index=True, max_length=100, blank=True, default='')
    emoji_unicode = models.CharField(max_length=100, blank=True, default='')

    def __str__(self):
        return self.name

    def __unicode__(self):
        return u"{}".format(self.emoji)

    class Meta:
        db_table = 'store'
        verbose_name_plural = "Emojis"
