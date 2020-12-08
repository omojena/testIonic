import {NgModule} from '@angular/core';

import {FeatherModule} from 'angular-feather';
import {
  User, ArrowLeft, Clock, ArrowDown, ArrowUp, Trash, HelpCircle, Eye, Trash2, Settings,
  EyeOff, X, XCircle, Check, AlertCircle, Plus, Power, CreditCard, ArrowUpRight,
  BarChart2, DollarSign, Edit3, ChevronLeft, ChevronUp, ChevronDown, UserPlus, DownloadCloud,
  Info, UserCheck, Download, BookOpen, Sun, Moon, Save, Lock, Send, List, LogIn, LogOut,
} from 'angular-feather/icons';

// Select some icons (use an object, not an array)
const icons = {
  DownloadCloud,
  Settings,
  Trash2,
  UserPlus,
  LogOut,
  LogIn,
  List,
  Send,
  Lock,
  User,
  ArrowLeft,
  Clock,
  ArrowUp,
  ArrowDown,
  Trash,
  HelpCircle,
  Eye,
  EyeOff,
  X,
  XCircle,
  Check,
  AlertCircle,
  Plus,
  Power,
  CreditCard,
  ArrowUpRight,
  BarChart2,
  DollarSign,
  Edit3,
  ChevronLeft,
  ChevronUp,
  ChevronDown,
  Info,
  UserCheck,
  Download,
  BookOpen,
  Sun,
  Moon,
  Save
};

@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})

export class IconsModule {
}
