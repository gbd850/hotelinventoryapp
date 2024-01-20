import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

export const requestInterceptor: HttpInterceptorFn = (req, next) => {
  // console.log(req);
  if (req.method === 'POST') {
    const newRequest = req.clone({
      headers: new HttpHeaders({ token: 'token123' }),
    });
    return next(newRequest);
  }
  return next(req);
};
