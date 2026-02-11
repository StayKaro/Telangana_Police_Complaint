import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { LogOut, User } from 'lucide-react';

const Settings = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Settings</h2>
          <p className="text-muted-foreground">Manage login, profile, and session settings.</p>
        </div>

        <Tabs defaultValue="login">
          <TabsList>
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="logout">Logout</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Officer Login Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="officerName">Name</Label>
                    <Input id="officerName" placeholder="Officer name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="badgeNumber">Badge Number</Label>
                    <Input id="badgeNumber" placeholder="TS-0000" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position">Position</Label>
                    <Input id="position" placeholder="Inspector / Sub-Inspector" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="psLocation">PS Location</Label>
                    <Input id="psLocation" placeholder="Police station location" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="photo">Photo</Label>
                    <Input id="photo" type="file" />
                  </div>
                </div>
                <Button>Save Login Details</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Officer Profile</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Avatar className="h-16 w-16">
                    <AvatarFallback>VK</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-lg font-semibold text-foreground">Inspector M. Venkatesh</p>
                    <p className="text-sm text-muted-foreground">Badge TS-1189 • Madhapur PS</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="rounded-lg border p-4">
                    <p className="text-sm text-muted-foreground">Position</p>
                    <p className="font-medium text-foreground">Inspector</p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <p className="text-sm text-muted-foreground">PS Location</p>
                    <p className="font-medium text-foreground">Madhapur, Cyber Towers</p>
                  </div>
                </div>
                <Button variant="outline">
                  <User className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="logout">
            <Card>
              <CardHeader>
                <CardTitle>Logout</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  You will be signed out of the system and redirected to the login screen.
                </p>
                <Button variant="destructive">
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Settings;
