from django.db import models

# Create your models here.


class Counter(models.Model):
    num = models.IntegerField()

    def __str__(self):
        return "{}".format(str(self.num))
    