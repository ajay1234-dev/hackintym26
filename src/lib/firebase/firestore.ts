import { collection, addDoc, getDocs, updateDoc, doc, query, orderBy } from "firebase/firestore";
import { db } from "./config";

export interface TeamRegistration {
  teamName: string;
  leaderName: string;
  email: string;
  phone: string;
  collegeName: string;
  members: string[]; // Up to 4 members
  projectIdea: string;
  domain: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: Date;
}

export const registerTeam = async (data: Omit<TeamRegistration, 'status' | 'createdAt'>) => {
  try {
    const docRef = await addDoc(collection(db, "teams"), {
      ...data,
      status: 'pending',
      createdAt: new Date(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error adding document: ", error);
    return { success: false, error };
  }
};

export const getTeams = async () => {
  try {
    const q = query(collection(db, "teams"), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as (TeamRegistration & { id: string })[];
  } catch (error) {
    console.error("Error getting teams: ", error);
    return [];
  }
};

export const updateTeamStatus = async (teamId: string, status: 'approved' | 'rejected') => {
  try {
    const teamRef = doc(db, "teams", teamId);
    await updateDoc(teamRef, { status });
    return true;
  } catch (error) {
    console.error("Error updating team status: ", error);
    return false;
  }
};
