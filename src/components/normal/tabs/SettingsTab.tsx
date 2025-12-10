import React from 'react';
import { Settings as SettingsIcon, Shield, Bell, Users, Image, Lock } from 'lucide-react';

interface SettingsTabProps {
  communityId: string;
}

export function SettingsTab({ communityId }: SettingsTabProps) {
  const settingSections = [
    {
      title: 'General',
      icon: <SettingsIcon size={20} />,
      settings: [
        { label: 'Community Name', value: 'Tech Innovators' },
        { label: 'Description', value: 'A community for developers...' },
        { label: 'Category', value: 'Technology' }
      ]
    },
    {
      title: 'Privacy & Access',
      icon: <Lock size={20} />,
      settings: [
        { label: 'Privacy', value: 'Public' },
        { label: 'Join Approval', value: 'Required' },
        { label: 'Member Invites', value: 'Enabled' }
      ]
    },
    {
      title: 'Permissions',
      icon: <Shield size={20} />,
      settings: [
        { label: 'Post Creation', value: 'All Members' },
        { label: 'Comment Permissions', value: 'All Members' },
        { label: 'File Uploads', value: 'Moderators Only' }
      ]
    },
    {
      title: 'Notifications',
      icon: <Bell size={20} />,
      settings: [
        { label: 'New Member Alerts', value: 'Enabled' },
        { label: 'Post Notifications', value: 'Admins Only' },
        { label: 'Report Alerts', value: 'Enabled' }
      ]
    }
  ];

  return (
    <div className="space-y-4">
      {settingSections.map((section, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
        >
          <div className="p-4 bg-gray-50 border-b border-gray-200">
            <div className="flex items-center gap-2 text-gray-900">
              <div className="text-[#38C4DA]">{section.icon}</div>
              <h3>{section.title}</h3>
            </div>
          </div>
          
          <div className="divide-y divide-gray-200">
            {section.settings.map((setting, settingIndex) => (
              <div
                key={settingIndex}
                className="p-4 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 text-sm">{setting.label}</span>
                  <span className="text-gray-900 text-sm">{setting.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Danger Zone */}
      <div className="bg-white rounded-2xl border-2 border-red-200 overflow-hidden">
        <div className="p-4 bg-red-50 border-b border-red-200">
          <h3 className="text-red-700">Danger Zone</h3>
        </div>
        
        <div className="p-4 space-y-3">
          <button className="w-full px-4 py-2 bg-white border border-red-200 text-red-600 rounded-lg hover:bg-red-50 transition-colors text-sm">
            Archive Community
          </button>
          <button className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm">
            Delete Community
          </button>
        </div>
      </div>
    </div>
  );
}
