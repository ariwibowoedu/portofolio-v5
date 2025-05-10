import { defineStore } from "pinia"
import { ref } from 'vue'
import { collection, getDocs, addDoc, deleteDoc, doc, getDoc } from "firebase/firestore"
import { db } from '@/firebase/firebase'

export const useProjectsStore = defineStore('projects', () => {
    const projects = ref([])
    const project = ref(null)
    const loading = ref(false)
    const error = ref(null)

    const fetchProjects = async () => {
        loading.value = true
        try {
            const querySnapshot = await getDocs(collection(db, 'projects'))
            projects.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        } catch (err) {
            error.value = err.message
        } finally {
            loading.value = false
        }
    }

    const fetchProjectById = async (id) => {
        loading.value = true
        console.log("fetching project with id: ", id)
        try {
            const docRef = doc(db, 'projects', id)
            const docSnap = await getDoc(docRef)
            // console.log("Doc snap: ", docSnap.exists(), docSnap.data())

            if (docSnap.exists()) {
                project.value = { id: docSnap.id, ...docSnap.data() }
            } else {
                project.value = null
            }
        } catch (error) {
            console.error("Error fetching project by Id:", error)
            project.value = null
        } finally {
            loading.value = false
        }
    }

    const addProject = async (newProject) => {
        await addDoc(collection(db, 'projects'), newProject)
        fetchProjects()
    }

    const deleteProject = async (id) => {
        await deleteDoc(doc(db, 'projects', id))
        fetchProjects()
    }

    return {
        projects,
        project,
        loading,
        error,
        fetchProjects,
        fetchProjectById,
        addProject,
        deleteProject
    }
})