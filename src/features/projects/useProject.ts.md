import { useMutation, useQuery } from '@tanstack/react-query'
import projectApiService from '../services/projectApiService'
import { CreateProjectPayload, Project } from '../types'
import { PaginatedResponse, PaginationParams } from '@/types/pagination'

export const useProjects = (params?: PaginationParams) => {
  return useQuery<PaginatedResponse<Project>>({
    queryKey: ['projects', params],
    queryFn: () => projectApiService.getAll(params),
    // keepPreviousData: true, // Keep previous data while fetching new data
  })
}

export const useProject = (id: number) => {
  return useQuery<Project>({
    queryKey: ['project', id],
    queryFn: () => projectApiService.getById(id),
  })
}

export const useCreateProject = () => {
  return useMutation({
    mutationFn: (data: CreateProjectPayload) => {
      const payload = {
        ...data,
        status: data.status || 'NOT_STARTED',
        workflow: data.workflow || 'AGILE',
        progress: data.progress || 0,
        teamMembers: data.teamMembers || [],
      }
      return projectApiService.create(payload)
    },
  })
}

export const useUpdateProject = () => {
  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: CreateProjectPayload }) =>
      projectApiService.update(id, data),
  })
}

export const useDeleteProject = () => {
  return useMutation({
    mutationFn: (id: number) => projectApiService.delete(id),
  })
}
