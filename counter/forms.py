from django import forms
from . import models

class ExtraCounter(forms.ModelForm):
    class Meta:
        model  =  models.Counter
        fields =  ['num']