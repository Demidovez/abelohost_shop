import axios from 'axios';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

interface LoginBody {
  username: string;
  password: string;
}

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

export async function POST(request: Request) {
  const cookieStore = await cookies();
  const body: LoginBody = await request.json();

  const response = await axios.post<LoginResponse>(
    `${process.env.DATA_API_URL}/auth/login`,
    {
      username: body.username,
      password: body.password,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  cookieStore.set('access_token', response.data.accessToken);
  cookieStore.set('refresh_token', response.data.refreshToken);

  return NextResponse.json(response.data);
}
