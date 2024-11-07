from django.db import models


# Create your models here.
class Contact(models.Model):  
    fname = models.CharField(max_length=100)
    contactEmail = models.EmailField()
    subject = models.CharField(max_length=200)
    message = models.TextField()

    def __str__(self):
        return self.fname
