import { NextRequest, NextResponse } from 'next/server';
import mysqlDB from '../../../lib/mysqlDB';

export async function POST(req: NextRequest) {
  const { email} = await req.json();

  try {
    const query = `
      INSERT INTO email (email) 
      VALUES (?)
    `;
    const values = [email];

    await mysqlDB.execute(query, values);

    return NextResponse.json({ message: 'Email saved successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error saving email' }, { status: 500 });
  }
}
