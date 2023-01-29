import { doc, setDoc, collection, addDoc, updateDoc, getDocs } from "firebase/firestore";
import { CompanyData } from "../types";
import { db } from "./initFirebase";

export async function loadData(data: string[][]) {
  const createQueDocResponse = await addDoc(collection(db, 'que'), {
    dateAdded: new Date(),
    totalSMSSent: 0,
  });

  const newQueCompaniesDoc = doc(db, 'que', createQueDocResponse.id);

  for (let companyRow of data) {
    const companyData = generateCompanyDataFromArray(companyRow);
    if (companyData.cui) {
      const newQueCompaniesCollection = doc(collection(newQueCompaniesDoc, 'companies'), companyData.cui);
      await setDoc(newQueCompaniesCollection, companyData);
    }
  }

  const companiesQuerySnap = await getDocs(collection(newQueCompaniesDoc, "companies"));
  await updateDoc(newQueCompaniesDoc, { totalQueuedCompanies: companiesQuerySnap.size })
}


function generateCompanyDataFromArray(fields: string[]): CompanyData {
  return {
    cui: fields[0],
    name: fields[1],
    address: fields[2],
    county: fields[3],
    nrRegCom: fields[4],
    postCode: fields[5],
    phoneNumber: fields[6],
    registrationDate: fields[7],
    addedToQueDate: new Date()
  }
}