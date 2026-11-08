import { HttpErrorResponse } from '@angular/common/http';

export function readApiError(error: unknown): string {
  if (error instanceof HttpErrorResponse) {
    const message = error.error?.message;
    if (typeof message === 'string' && message.trim().length > 0) {
      return message;
    }
    if (error.status === 0) {
      return 'Cannot reach the server. Start the Spring Boot app on port 8080, then try again.';
    }
  }
  return 'Something went wrong. Please try again.';
}
