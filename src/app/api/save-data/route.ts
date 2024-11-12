import { NextRequest, NextResponse } from 'next/server';
import mysqlDB from '../../lib/mysqlDB';

export async function POST(req: NextRequest) {
  const { nom, email, subject, telephone, bonjour } = await req.json();

  try {
    const query = `
      INSERT INTO contact (nom, email, subject, telephone, bonjour) 
      VALUES (?, ?, ?, ?, ?)
    `;
    const values = [nom, email, subject, telephone, bonjour];

    await mysqlDB.execute(query, values);

    return NextResponse.json({ message: 'Contact saved successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error saving contact' }, { status: 500 });
  }
}
