from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from .models import Counter
from . import forms

@csrf_exempt
def CounterView(request, id):
    # count = forms.ExtraCounter()
    counter = Counter.objects.get(id=id)
    if request.method == 'POST':
        counter.num += 1
        counter.save()
        # import ipdb; ipdb.set_trace()                                     
    return render(request, 'counter/index.html', {'counter': counter})



from django.http import JsonResponse
@csrf_exempt
def add_value(request, id):
    counter = Counter.objects.get(id=id)
    counter.num += 1
    counter.save()
    return JsonResponse({'new_object': counter.num})   
    
def homepage(request):
    return render(request, 'counter/index2.html')