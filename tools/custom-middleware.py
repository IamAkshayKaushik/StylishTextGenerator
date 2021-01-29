import time
from django.utils.deprecation import MiddlewareMixin


# https://stackoverflow.com/questions/44997388/django-why-is-this-custom-middleware-not-working
class StatsMiddleware(MiddlewareMixin):
    # def __init__(self, get_response):
    #     self.get_response = get_response
    #
    # def __call__(self, request):
    #     return self.get_response(request)

    def process_request(self, request):
        "Store the start time when the request comes in."
        request.start_time = time.time()
        # print(request.path_info.lstrip('/'))

    def process_response(self, request, response):
        "Calculate and output the page generation duration"
        # Get the start time from the request and calculate how long
        # the response took.
        duration = time.time() - request.start_time
        x = duration * 1000
        print(x)
        # Add the header.
        response["X-Page-Generation-Duration-ms"] = int(x)
        response['Content-Type'] = "text/html; charset=utf-8"
        response['Link'] = "</static/css/style.css>; as=style; rel=preload"
        return response
