import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Switch,
  FormControlLabel,
  FormGroup,
  Divider,
  Alert,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
} from '@mui/material';
import {
  GitHub,
  Key,
  Language,
  Notifications,
  Security,
  Palette,
  Speed,
  Check,
  Warning,
  Info,
} from '@mui/icons-material';

// Components
import Layout from '../components/layout/Layout';
import GradientButton from '../components/ui/GradientButton';

const Settings: React.FC = () => {
  const navigate = useNavigate();
  const [settings, setSettings] = React.useState({
    autoTranslate: true,
    createPR: true,
    notifications: true,
    darkMode: true,
    geminiModel: 'gemini-pro',
    defaultLanguages: ['Spanish', 'French', 'Portuguese'],
    scanFrequency: 'daily',
  });

  // Mock user data
  const user = {
    name: 'John Doe',
    avatar: 'https://github.com/johndoe.png',
    username: 'johndoe',
  };

  const handleSettingChange = (setting: string, value: boolean | string | string[]) => {
    setSettings(prev => ({
      ...prev,
      [setting]: value,
    }));
  };

  const supportedLanguages = [
    'Spanish', 'French', 'Portuguese', 'German', 'Italian', 'Chinese',
    'Japanese', 'Korean', 'Arabic', 'Hindi', 'Russian', 'Dutch'
  ];

  const geminiModels = [
    { value: 'gemini-pro', label: 'Gemini Pro', description: 'Best for complex translations' },
    { value: 'gemini-pro-vision', label: 'Gemini Pro Vision', description: 'Includes image understanding' },
  ];

  return (
    <Layout 
      backgroundVariant="dashboard" 
      user={user} 
      onLogout={() => navigate('/')}
    >
      <Container maxWidth="lg">
        <Box sx={{ py: 6 }}>
          {/* Header */}
          <Box sx={{ mb: 6 }}>
            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontWeight: 700,
                mb: 2,
                background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Settings
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'rgba(255,255,255,0.7)',
                mb: 4,
              }}
            >
              Configure your translation preferences and integrations
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {/* GitHub Integration */}
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <GitHub sx={{ fontSize: 24, color: '#6366f1' }} />
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                      GitHub Integration
                    </Typography>
                  </Box>

                  <Alert severity="success" sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Check sx={{ fontSize: 20 }} />
                      Connected as @{user.username}
                    </Box>
                  </Alert>

                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle2" sx={{ color: 'white', mb: 1 }}>
                      Connected Repositories
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                      3 repositories connected
                    </Typography>
                  </Box>

                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle2" sx={{ color: 'white', mb: 1 }}>
                      API Rate Limit
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                      4,847 / 5,000 requests remaining this hour
                    </Typography>
                  </Box>

                  <GradientButton variant="outline" fullWidth>
                    Refresh GitHub Connection
                  </GradientButton>
                </CardContent>
              </Card>
            </Grid>

            {/* Gemini AI Configuration */}
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Key sx={{ fontSize: 24, color: '#6366f1' }} />
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                      Gemini AI Configuration
                    </Typography>
                  </Box>

                  <Box sx={{ mb: 3 }}>
                    <TextField
                      fullWidth
                      label="Gemini API Key"
                      type="password"
                      placeholder="AIza..."
                      variant="outlined"
                      sx={{
                        mb: 2,
                        '& .MuiOutlinedInput-root': {
                          color: 'white',
                          '& fieldset': {
                            borderColor: 'rgba(255,255,255,0.3)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(255,255,255,0.5)',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#6366f1',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: 'rgba(255,255,255,0.7)',
                        },
                      }}
                    />
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                      Your API key is encrypted and stored securely
                    </Typography>
                  </Box>

                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle2" sx={{ color: 'white', mb: 2 }}>
                      Model Selection
                    </Typography>
                    {geminiModels.map((model) => (
                      <Box
                        key={model.value}
                        sx={{
                          p: 2,
                          border: settings.geminiModel === model.value 
                            ? '2px solid #6366f1' 
                            : '1px solid rgba(255,255,255,0.1)',
                          borderRadius: 2,
                          mb: 1,
                          cursor: 'pointer',
                          backgroundColor: settings.geminiModel === model.value 
                            ? 'rgba(99, 102, 241, 0.1)' 
                            : 'transparent',
                        }}
                        onClick={() => handleSettingChange('geminiModel', model.value)}
                      >
                        <Typography variant="body2" sx={{ color: 'white', fontWeight: 500 }}>
                          {model.label}
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                          {model.description}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  <Alert severity="info">
                    <Typography variant="caption">
                      Gemini Pro provides the best translation quality for technical content
                    </Typography>
                  </Alert>
                </CardContent>
              </Card>
            </Grid>

            {/* Translation Settings */}
            <Grid item xs={12}>
              <Card>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Language sx={{ fontSize: 24, color: '#6366f1' }} />
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                      Translation Settings
                    </Typography>
                  </Box>

                  <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                      <Typography variant="subtitle2" sx={{ color: 'white', mb: 2 }}>
                        Automation Preferences
                      </Typography>
                      
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Switch
                              checked={settings.autoTranslate}
                              onChange={(e) => handleSettingChange('autoTranslate', e.target.checked)}
                              sx={{
                                '& .MuiSwitch-switchBase.Mui-checked': {
                                  color: '#6366f1',
                                },
                                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                  backgroundColor: '#6366f1',
                                },
                              }}
                            />
                          }
                          label={
                            <Box>
                              <Typography variant="body2" sx={{ color: 'white' }}>
                                Auto-translate new strings
                              </Typography>
                              <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                                Automatically translate new strings when detected
                              </Typography>
                            </Box>
                          }
                          sx={{ mb: 2 }}
                        />

                        <FormControlLabel
                          control={
                            <Switch
                              checked={settings.createPR}
                              onChange={(e) => handleSettingChange('createPR', e.target.checked)}
                              sx={{
                                '& .MuiSwitch-switchBase.Mui-checked': {
                                  color: '#6366f1',
                                },
                                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                  backgroundColor: '#6366f1',
                                },
                              }}
                            />
                          }
                          label={
                            <Box>
                              <Typography variant="body2" sx={{ color: 'white' }}>
                                Auto-create pull requests
                              </Typography>
                              <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                                Automatically create PRs with translation updates
                              </Typography>
                            </Box>
                          }
                          sx={{ mb: 2 }}
                        />

                        <FormControlLabel
                          control={
                            <Switch
                              checked={settings.notifications}
                              onChange={(e) => handleSettingChange('notifications', e.target.checked)}
                              sx={{
                                '& .MuiSwitch-switchBase.Mui-checked': {
                                  color: '#6366f1',
                                },
                                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                  backgroundColor: '#6366f1',
                                },
                              }}
                            />
                          }
                          label={
                            <Box>
                              <Typography variant="body2" sx={{ color: 'white' }}>
                                Email notifications
                              </Typography>
                              <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                                Receive updates about translation progress
                              </Typography>
                            </Box>
                          }
                        />
                      </FormGroup>
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <Typography variant="subtitle2" sx={{ color: 'white', mb: 2 }}>
                        Default Target Languages
                      </Typography>
                      
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                        {supportedLanguages.map((language) => (
                          <Chip
                            key={language}
                            label={language}
                            onClick={() => {
                              const newLanguages = settings.defaultLanguages.includes(language)
                                ? settings.defaultLanguages.filter(l => l !== language)
                                : [...settings.defaultLanguages, language];
                              handleSettingChange('defaultLanguages', newLanguages);
                            }}
                            sx={{
                              backgroundColor: settings.defaultLanguages.includes(language)
                                ? 'rgba(99, 102, 241, 0.2)'
                                : 'rgba(255, 255, 255, 0.1)',
                              color: settings.defaultLanguages.includes(language)
                                ? '#6366f1'
                                : 'rgba(255,255,255,0.7)',
                              border: settings.defaultLanguages.includes(language)
                                ? '1px solid rgba(99, 102, 241, 0.5)'
                                : '1px solid rgba(255, 255, 255, 0.2)',
                              '&:hover': {
                                backgroundColor: settings.defaultLanguages.includes(language)
                                  ? 'rgba(99, 102, 241, 0.3)'
                                  : 'rgba(255, 255, 255, 0.15)',
                              },
                            }}
                          />
                        ))}
                      </Box>

                      <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                        Selected: {settings.defaultLanguages.length} languages
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            {/* Performance & Security */}
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Speed sx={{ fontSize: 24, color: '#6366f1' }} />
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                      Performance
                    </Typography>
                  </Box>

                  <List>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemIcon>
                        <Speed sx={{ color: '#6366f1' }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography variant="body2" sx={{ color: 'white' }}>
                            Scan Frequency
                          </Typography>
                        }
                        secondary={
                          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                            How often to check for new strings
                          </Typography>
                        }
                      />
                      <ListItemSecondaryAction>
                        <Chip
                          label={settings.scanFrequency}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(99, 102, 241, 0.1)',
                            color: '#6366f1',
                            border: '1px solid rgba(99, 102, 241, 0.3)',
                            textTransform: 'capitalize',
                          }}
                        />
                      </ListItemSecondaryAction>
                    </ListItem>

                    <Divider sx={{ my: 1, backgroundColor: 'rgba(255,255,255,0.1)' }} />

                    <ListItem sx={{ px: 0 }}>
                      <ListItemIcon>
                        <Info sx={{ color: '#3b82f6' }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography variant="body2" sx={{ color: 'white' }}>
                            Cache Settings
                          </Typography>
                        }
                        secondary={
                          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                            Translation cache enabled
                          </Typography>
                        }
                      />
                      <ListItemSecondaryAction>
                        <Chip
                          label="Enabled"
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(34, 197, 94, 0.1)',
                            color: '#22c55e',
                            border: '1px solid rgba(34, 197, 94, 0.3)',
                          }}
                        />
                      </ListItemSecondaryAction>
                    </ListItem>
                  </List>

                  <Box sx={{ mt: 3 }}>
                    <GradientButton variant="outline" fullWidth>
                      Clear Translation Cache
                    </GradientButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Security Settings */}
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Security sx={{ fontSize: 24, color: '#6366f1' }} />
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                      Security
                    </Typography>
                  </Box>

                  <List>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemIcon>
                        <Check sx={{ color: '#22c55e' }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography variant="body2" sx={{ color: 'white' }}>
                            Token Encryption
                          </Typography>
                        }
                        secondary={
                          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                            GitHub tokens are encrypted at rest
                          </Typography>
                        }
                      />
                    </ListItem>

                    <ListItem sx={{ px: 0 }}>
                      <ListItemIcon>
                        <Check sx={{ color: '#22c55e' }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography variant="body2" sx={{ color: 'white' }}>
                            Secure API Calls
                          </Typography>
                        }
                        secondary={
                          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                            All API requests use HTTPS
                          </Typography>
                        }
                      />
                    </ListItem>

                    <ListItem sx={{ px: 0 }}>
                      <ListItemIcon>
                        <Warning sx={{ color: '#f59e0b' }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography variant="body2" sx={{ color: 'white' }}>
                            Rate Limiting
                          </Typography>
                        }
                        secondary={
                          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                            API calls are rate-limited for security
                          </Typography>
                        }
                      />
                    </ListItem>
                  </List>

                  <Alert severity="warning" sx={{ mt: 2 }}>
                    <Typography variant="caption">
                      Revoke access anytime from your GitHub settings
                    </Typography>
                  </Alert>
                </CardContent>
              </Card>
            </Grid>

            {/* Save Settings */}
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                <GradientButton
                  variant="primary"
                  size="large"
                  sx={{ px: 6 }}
                >
                  Save Settings
                </GradientButton>
                
                <GradientButton
                  variant="outline"
                  size="large"
                >
                  Reset to Defaults
                </GradientButton>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
};

export default Settings;