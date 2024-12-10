import React, { useState, useEffect, createContext, useContext } from 'react';

// Create a context for authentication
export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}
