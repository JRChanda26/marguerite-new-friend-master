import { NextRequest, NextResponse } from 'next/server';
import mysqlDB from '../../../lib/mysqlDB';

export async function POST(req: NextRequest) {
  const { nom, email, sujet, telephone, bonjour } = await req.json();

  try {
    const query = `
      INSERT INTO contact (nom, email, sujet, telephone, bonjour) 
      VALUES (?, ?, ?, ?, ?)
    `;
    const values = [nom, email, sujet, telephone, bonjour];

    await mysqlDB.execute(query, values);

    return NextResponse.json({ message: 'Contact envoyé avec succès' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Erreur lors de l\'enregistrement du contact' }, { status: 500 });
  }
}
