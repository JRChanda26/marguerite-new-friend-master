import { NextRequest, NextResponse } from 'next/server';
import mysqlConfiguration from '../../../../../lib/mysql-configuration';

export async function POST(req: NextRequest) {
  const { email} = await req.json();

  try {
    const query = `
      INSERT INTO email (email) 
      VALUES (?)
    `;
    const values = [email];

    await mysqlConfiguration.execute(query, values);

    return NextResponse.json({ message: 'Votre email a été soumis' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Erreur lors de l\'enregistrement de l\'email' }, { status: 500 });
  }
}
