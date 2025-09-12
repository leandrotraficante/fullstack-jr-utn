import React, { useState, useEffect } from 'react';
import { projectsService } from '../services/projects.service.js';
import { 
  Card, 
  CardContent, 
  TextField, 
  Button, 
  Typography, 
  Alert,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Box,
  Grid
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editingProject, setEditingProject] = useState(null);
    const [formData, setFormData] = useState({ 
        name: '', 
        category: '', 
        description: '', 
        technologies: '', 
        status: 'In progress' 
    });

    const loadProjects = async () => {
        try {
            setIsLoading(true);
            const response = await projectsService.getAll();
            setProjects(response.data.data);
            setError(null);
        } catch (error) {
                    setError('Error al cargar proyectos');
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const isNameUnique = (name, excludeId = null) => {
        return !projects.some(project => 
            project.name.toLowerCase() === name.toLowerCase() && 
            project._id !== excludeId
        );
    };

    const createProject = async (projectData) => {
        try {
            if (!isNameUnique(projectData.name)) {
                setError('Ya existe un proyecto con ese nombre');
                return;
            }

            const projectWithArray = {
                ...projectData,
                technologies: projectData.technologies.split(',').map(tech => tech.trim()).filter(tech => tech)
            };

            setIsLoading(true);
            await projectsService.create(projectWithArray);
            loadProjects();
            setError(null);
            setFormData({ name: '', category: '', description: '', technologies: '', status: 'In progress' });
        } catch (error) {
                    setError('Error al crear proyecto');
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const updateProject = async (projectId, projectData) => {
        try {
            if (!isNameUnique(projectData.name, projectId)) {
                setError('Ya existe un proyecto con ese nombre');
                return;
            }

            const projectWithArray = {
                ...projectData,
                technologies: projectData.technologies.split(',').map(tech => tech.trim()).filter(tech => tech)
            };

            setIsLoading(true);
            await projectsService.update(projectId, projectWithArray);
            loadProjects();
            setError(null);
            setEditingProject(null);
            setFormData({ name: '', category: '', description: '', technologies: '', status: 'In progress' });
        } catch (error) {
                    setError('Error al actualizar proyecto');
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    // Iniciar edición de project
    const startEditing = (project) => {
        setEditingProject(project._id);
        setFormData({
            name: project.name,
            category: project.category,
            description: project.description,
            technologies: project.technologies.join(', '),
            status: project.status
        });
    };

    // Cancelar edición
    const cancelEditing = () => {
        setEditingProject(null);
        setFormData({ name: '', category: '', description: '', technologies: '', status: 'In progress' });
        setError(null);
    };

    // DELETE - Eliminar project
    const deleteProject = async (projectId) => {
        try {
            setIsLoading(true);
            await projectsService.delete(projectId);
            loadProjects();
            setError(null);
        } catch (error) {
                    setError('Error al eliminar proyecto');
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    // Manejar envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingProject) {
            updateProject(editingProject, formData);
        } else {
            createProject(formData);
        }
    };

    // Manejar cambios en el formulario
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    useEffect(() => {
        loadProjects();
    }, []);

    return (
        <Box>
            <Typography variant="h4" component="h1" gutterBottom>
                Proyectos
            </Typography>
            
            {/* Formulario para crear/editar proyecto */}
            <Card sx={{ mb: 3 }}>
                <CardContent>
                    <Typography variant="h5" component="h2" gutterBottom>
                        {editingProject ? 'Editar Proyecto' : 'Crear Nuevo Proyecto'}
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="name"
                                    label="Nombre"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="category"
                                    label="Categoría"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                    required
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="description"
                                    label="Descripción"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    required
                                    fullWidth
                                    multiline
                                    rows={2}
                                />
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <TextField
                                    name="technologies"
                                    label="Tecnologías (separadas por comas)"
                                    value={formData.technologies}
                                    onChange={handleInputChange}
                                    required
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    name="status"
                                    label="Estado"
                                    value={formData.status}
                                    onChange={handleInputChange}
                                    required
                                    fullWidth
                                    select
                                    SelectProps={{
                                        native: true,
                                    }}
                                >
                                    <option value="In progress">In progress</option>
                                    <option value="Completed">Completed</option>
                                </TextField>
                            </Grid>
                            <Grid item xs={12}>
                                        <Button type="submit" variant="contained" color="primary" sx={{ mr: 2 }}>
                                            {editingProject ? 'Actualizar Proyecto' : 'Crear Proyecto'}
                                        </Button>
                                {editingProject && (
                                    <Button type="button" onClick={cancelEditing} variant="outlined">
                                        Cancelar
                                    </Button>
                                )}
                            </Grid>
                        </Grid>
                    </Box>
                </CardContent>
            </Card>
            
                    {/* Lista de proyectos */}
            {isLoading ? (
                <Box display="flex" justifyContent="center" p={3}>
                    <CircularProgress />
                </Box>
            ) : error ? (
                <Alert 
                    severity="error" 
                    action={
                        <Button 
                            color="inherit" 
                            size="small" 
                            onClick={() => {
                                setError(null);
                                if (editingProject) {
                                    cancelEditing();
                                }
                            }}
                        >
                            Regresar
                        </Button>
                    }
                    sx={{ mb: 2 }}
                >
                    {error}
                </Alert>
            ) : projects.length === 0 ? (
                        <Typography variant="body1" color="text.secondary" align="center" sx={{ p: 3 }}>
                            No hay proyectos disponibles
                        </Typography>
            ) : (
                <List>
                    {projects.map(project => (
                        <ListItem 
                            key={project._id} 
                            component={Card} 
                            sx={{ mb: 1, p: 2 }}
                        >
                            <ListItemText
                                primary={
                                    <Typography variant="h6" component="span">
                                        {project.name}
                                    </Typography>
                                }
                                secondary={
                                    <Box>
                                        <Typography variant="body2" color="text.secondary" component="span">
                                            <strong>Categoría:</strong> {project.category}
                                        </Typography>
                                        <br />
                                        <Typography variant="body2" component="span">
                                            {project.description}
                                        </Typography>
                                        <br />
                                        <Typography variant="body2" color="text.secondary" component="span">
                                            <strong>Tecnologías:</strong> {project.technologies.join(', ')}
                                        </Typography>
                                        <br />
                                        <Typography variant="body2" color="text.secondary" component="span">
                                            <strong>Estado:</strong> {project.status}
                                        </Typography>
                                    </Box>
                                }
                            />
                            <ListItemSecondaryAction>
                                <IconButton 
                                    edge="end" 
                                    aria-label="editar"
                                    onClick={() => startEditing(project)}
                                    color="primary"
                                    sx={{ mr: 1 }}
                                >
                                    <Edit />
                                </IconButton>
                                <IconButton 
                                    edge="end" 
                                    aria-label="eliminar"
                                    onClick={() => deleteProject(project._id)}
                                    color="error"
                                >
                                    <Delete />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>
            )}
        </Box>
    );
};

export default Projects;