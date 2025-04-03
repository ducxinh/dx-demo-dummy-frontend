// import { Article } from 'types/Article'
import apiClient from '@/services/api'

export interface Article {
  id: string
  title: string
}

class AwsAmplifyService {
  path: string

  constructor() {
    this.path = '/api/v1/settings'
  }

  listAwsProfiles = async (params: any = {}) => {
    const data = await apiClient.get(`${this.path}/aws-profiles`, { params })
    return data.data
  }
  reloadApp = async (params: any = {}) => {
    const data = await apiClient.get(`${this.path}/reload-app`, {
      params,
    })
    return data.data
  }
  listAwsRegions = async (params: any = {}) => {
    const data = await apiClient.get(`${this.path}/aws-regions`, { params })
    return data.data
  }

  markActive = async (id: number, payload: any) => {
    return apiClient.patch(`${this.path}/${id}/mark`, payload)
  }

  create = async (payload: any) => {
    return apiClient.post(this.path, payload)
  }

  setProfileSessionToken = async (payload: any) => {
    return apiClient.post(`${this.path}/aws-profile-session-token`, payload)
  }

  get = async (id: any) => {
    const data = await apiClient.get(`${this.path}/${id}`)
    return data.data
  }

  update = async (id: any) => {
    return apiClient.put(`${this.path}/${id}`)
  }

  delete = async (id: any) => {
    return apiClient.delete(`${this.path}/${id}`)
  }
}

export default new AwsAmplifyService()
